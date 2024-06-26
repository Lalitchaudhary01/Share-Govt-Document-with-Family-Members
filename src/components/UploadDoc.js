import { useState } from "react";

const UploadDoc = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Logic for uploading the selected file
    console.log("File uploaded:", file);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-2xl mb-4">Upload Document</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDoc;
