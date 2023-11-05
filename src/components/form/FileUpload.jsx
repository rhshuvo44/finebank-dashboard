import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = (props) => {
  const [file, setFile] = useState([]);

  const onDrop = useCallback((files) => {
    // Do something with the uploaded files, like uploading to a server or processing them.
    setFile(files);
  }, []);
  const delImg = () => {
    setFile([]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <label
        {...getRootProps()}
        htmlFor="dropzone-file"
        className={`dropzone ${
          isDragActive ? "active" : ""
        } flex flex-col justify-center items-center p-3  rounded-lg border-2 border-dashed  border-gray-300  cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100 `}
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input {...getInputProps()} />
      </label>

      <div className="showimg mt-5 flex flex-wrap gap-3">
        {file?.map((i, j) => (
          <div key={j} className="relative">
            <button
              type="button"
              className="btn-close text-red-600 absolute"
              onClick={delImg}
              style={{ top: "4px", right: "25px", cursor: "pointer" }}
            >
              X
            </button>
            <img src={i.path} alt="" width={200} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
