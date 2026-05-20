<?php
header("Content-Type: application/json; charset=UTF-8");

$file = 'products.json';
$method = $_SERVER['REQUEST_METHOD'];
$requestUri = trim($_SERVER['REQUEST_URI'], '/');
$parts = explode('/', $requestUri);
$productId = isset($parts[1]) && is_numeric($parts[1]) ? (int)$parts[1] : null;

function getProducts($file) {
    return json_decode(file_get_contents($file), true);
}

function saveProducts($file, $data) {
    file_put_contents($file, json_encode(array_values($data), JSON_PRETTY_PRINT));
}

$products = getProducts($file);

switch ($method) {
    case 'GET':
        if ($productId) {
            $found = array_filter($products, fn($p) => $p['id'] === $productId);
            echo json_encode(array_values($found)[0] ?? ["error" => "Not Found"]);
        } else {
            echo json_encode($products);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if (isset($data['name'], $data['price'], $data['quantity'])) {
            $newId = count($products) > 0 ? max(array_column($products, 'id')) + 1 : 1;
            $newProduct = [
                "id" => $newId,
                "name" => $data['name'],
                "price" => $data['price'],
                "quantity" => $data['quantity']
            ];
            $products[] = $newProduct;
            saveProducts($file, $products);
            http_response_code(201);
            echo json_encode($newProduct);
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Bad Request"]);
        }
        break;

    case 'PUT':
        if (!$productId) {
            http_response_code(400);
            echo json_encode(["error" => "ID Required"]);
            break;
        }
        $data = json_decode(file_get_contents("php://input"), true);
        $updated = false;
        foreach ($products as &$product) {
            if ($product['id'] === $productId) {
                $product['name'] = $data['name'] ?? $product['name'];
                $product['price'] = $data['price'] ?? $product['price'];
                $product['quantity'] = $data['quantity'] ?? $product['quantity'];
                $updated = true;
                break;
            }
        }
        if ($updated) {
            saveProducts($file, $products);
            echo json_encode(["status" => "Updated"]);
        } else {
            http_response_code(404);
            echo json_encode(["error" => "Not Found"]);
        }
        break;

    case 'DELETE':
        if (!$productId) {
            http_response_code(400);
            echo json_encode(["error" => "ID Required"]);
            break;
        }
        $count = count($products);
        $products = array_filter($products, fn($p) => $p['id'] !== $productId);
        if (count($products) < $count) {
            saveProducts($file, $products);
            echo json_encode(["status" => "Deleted"]);
        } else {
            http_response_code(404);
            echo json_encode(["error" => "Not Found"]);
        }
        break;

    default:
        http_response_code(405);
        break;
}