/*async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Por favor, primero suba un archivo de video.");
        return;
    }
    
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.predicted_class) {
            document.getElementById("result").innerHTML = `
            <strong>Predicción:</strong> ${data.predicted_class} <br>
            <strong>Confidence:</strong> ${(data.confidence * 100).toFixed(1)}%`;
        } else {
            document.getElementById("result").textContent = JSON.stringify(data, null, 2);
        }
    } catch (err) {
        console.error("Error:", err);
        document.getElementById("result").textContent = "Ocurrió un error al procesar el archivo.";
    }
}*/

document.querySelectorAll(".mine-box").forEach(box => {
    box.addEventListener("click", (e) => {
        e.preventDefault();
        const mineName = box.textContent.trim();
        window.location.href = `${mineName.toLowerCase()}.html`;
    });
});

function goBack() {
    window.history.back();
}