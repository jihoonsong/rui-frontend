export async function sendJsonRpcRequest(method: string, request: object) {
const response = await fetch("http://127.0.0.1:50011", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        jsonrpc: "2.0",
        method,
        "params": {
            "request": request
        },
        id: 1,
    }),
});

if (!response.ok) {
    throw new Error("Network response was not ok: ${response.statusText}");
}

const data = await response.json();

if (data.error) {
    throw new Error("JSON-RPC Error: ${data.error.message}");
}

return data.result;
}