module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "conda update -y -c conda-forge huggingface_hub"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: 'hf download lj1995/VoiceConversionWebUI --include "*.pth" --include "*.pt" --include "*.onnx" --exclude "rmvpe.onnx" --exclude "rmvpe.pt" --exclude "hubert_base.pt" --local-dir assets && dir'
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download lj1995/VoiceConversionWebUI hubert_base.pt --local-dir assets/hubert"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download lj1995/VoiceConversionWebUI rmvpe.pt rmvpe.onnx --local-dir assets/rmvpe"
      }
    }
  ]
}
