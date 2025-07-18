document.getElementById("createGist").addEventListener("click", async function () {
const filename = document.getElementById("filename").value || "gistfile1.txt";
const description = document.getElementById("description").value;
const content = document.getElementById("content").value;
const token = document.getElementById("token").value;
const fileInput = document.getElementById("file");

const statusDiv = document.getElementById("status");
const gistUrlDiv = document.getElementById("gistUrl");

          statusDiv.style.display = "none";
          gistUrlDiv.innerHTML = "";

          if (!token) {
            showStatus("GitHub token is required", "error");
            return;
          }

          let finalContent = content;

          // If a file is uploaded, use its content
          if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            try {
              finalContent = await readFileAsText(file);
              if (!filename) {
                document.getElementById("filename").value = file.name;
              }
            } catch (error) {
              showStatus("Error reading file: " + error.message, "error");
              return;
            }
          }

          if (!finalContent) {
            showStatus("Please enter content or upload a file", "error");
            return;
          }

          const gistData = {
            description: description,
            public: true,
            files: {
              [filename]: {
                content: finalContent,
              },
            },
          };

          try {
            const response = await fetch("https://api.github.com/gists", {
              method: "POST",
              headers: {
                Authorization: `token ${token}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.v3+json",
              },
              body: JSON.stringify(gistData),
            });

            const result = await response.json();

            if (response.ok) {
              localStorage.setItem("gistUrl", result.html_url);
              showStatus("Gist created successfully!", "success");
              gistUrlDiv.innerHTML = `<a href="${result.html_url}" target="_blank" class="mt-4 mb-4 bg-black rounded-lg p-2 text-blue-500 text-xl font-bold text-shadow border-b-2 border-red-500">View Gist</a>`;
            } else {
              showStatus(
                `Error: ${result.message || "Failed to create gist"}`,
                "error",
              );
              if (result.errors) {
                console.error(result.errors);
              }
            }
          } catch (error) {
            showStatus("Error: " + error.message, "error");
          }
        });

      function showStatus(message, type) {
        const statusDiv = document.getElementById("status");
        statusDiv.textContent = message;
        statusDiv.className = "status " + type;
        statusDiv.style.display = "block";
      }

      function readFileAsText(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target.result);
          reader.onerror = (error) => reject(error);
          reader.readAsText(file);
        });
      }
