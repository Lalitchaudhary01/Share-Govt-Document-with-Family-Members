import { useState } from "react";

const UpdateDeleteDoc = () => {
  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const newDoc = {
        id: docs.length + 1,
        name: file.name,
        size: file.size,
      };
      setDocs([...docs, newDoc]);
      setFile(null);
      console.log("File uploaded:", file);
    }
  };

  const handleUpdate = (docId) => {
    const newName = prompt("Enter the new name for the document:");
    if (newName) {
      const updatedDocs = docs.map((doc) =>
        doc.id === docId ? { ...doc, name: newName } : doc
      );
      setDocs(updatedDocs);
      console.log("Document updated:", docId);
    }
  };

  const handleDelete = (docId) => {
    const updatedDocs = docs.filter((doc) => doc.id !== docId);
    setDocs(updatedDocs);
    console.log("Document deleted:", docId);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-2xl mb-4">Upload Document</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Upload
      </button>

      <h2 className="text-2xl mb-4">Update/Delete Document</h2>
      <ul>
        {docs.map((doc) => (
          <li key={doc.id} className="mb-2 flex items-center">
            <span className="mr-4">
              {doc.name} - {doc.size} bytes
            </span>
            <button
              onClick={() => handleUpdate(doc.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(doc.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateDeleteDoc;
