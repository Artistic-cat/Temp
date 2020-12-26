import React, {useEffect, useRef, useState} from 'react';

const fileInputRef = useRef();
const modalImageRef = useRef();
const modalRef = useRef();
const progressRef = useRef();
const uploadRef = useRef();
const uploadModalRef = useRef();
const [selectedFiles, setSelectedFiles] = useState([]);
const [validFiles, setValidFiles] = useState([]);
const [unsupportedFiles, setUnsupportedFiles] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
    setValidFiles([...filteredArr]);

}, [selectedFiles]);

export const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
}

export const dragOver = (e) => {
    preventDefault(e);
}

export const dragEnter = (e) => {
    preventDefault(e);
}

export const dragLeave = (e) => {
    preventDefault(e);
}

export const fileDrop = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
        handleFiles(files);
    }
}

export const filesSelected = () => {
    if (fileInputRef.current.files.length) {
        handleFiles(fileInputRef.current.files);
    }
}

export const fileInputClicked = () => {
    fileInputRef.current.click();
}

export const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
        if (validateFile(files[i])) {
            setSelectedFiles(prevArray => [...prevArray, files[i]]);
        } else {
            files[i]['invalid'] = true;
            setSelectedFiles(prevArray => [...prevArray, files[i]]);
            setErrorMessage('File type not permitted');
            setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
        }
    }
}

export const validateFile = (file) => {
    // Add the required file types here
    const validTypes = [
        "text/csv",
        "application/json",
        "text/plain",
        "application/vmd.ms-excel", // ms office excel
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // microsoft excel openxml
        "application/msword", // ms office word
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", // microsoft word openxml
        "application/wps-office.docx", // wps office word
        "application/wps-office.xlsx", // wps office excel
        "application/pdf", // pdf files
    ];
    return validTypes.indexOf(file.type) !== -1;
}

export const fileSize = (size) => {
    if (size === 0) {
        return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const fileType = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
}

export const removeFile = (name) => {
    const index = validFiles.findIndex(e => e.name === name);
    const index2 = selectedFiles.findIndex(e => e.name === name);
    const index3 = unsupportedFiles.findIndex(e => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
        unsupportedFiles.splice(index3, 1);
        setUnsupportedFiles([...unsupportedFiles]);
    }
}

/*const openImageModal = (file) => {
    const reader = new FileReader();
    // modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        const file1 = new Blob([file]);
        // Build a URL from the file
        const fileURL = URL.createObjectURL(file1);

        // Open the URL on new Window
        const pdfWindow = window.open();
        pdfWindow.location.href = fileURL;

        // modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    }
}*/

export const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = 'none';
}

export const uploadFiles = async () => {
    // Handle file upload and render the progress bar
    uploadModalRef.current.style.display = 'block';
    uploadRef.current.innerHTML = 'File(s) Uploading...';
    for (let i = 0; i < validFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', validFiles[i]);
        formData.append('productTransactionTypeId', '157');

        axios.post(global.config.backend_ip + '/files',
            formData,
            {
                onUploadProgress: (progressEvent) => {
                    const uploadPercentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
                    progressRef.current.innerHTML = `${uploadPercentage}%`;
                    progressRef.current.style.width = `${uploadPercentage}%`;

                    if (uploadPercentage === 100) {
                        uploadRef.current.innerHTML = 'File(s) Uploaded';
                        validFiles.length = 0;
                        setValidFiles([...validFiles]);
                        setSelectedFiles([...validFiles]);
                        setUnsupportedFiles([...validFiles]);
                    }
                },
            })
            .catch(() => {
                uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
                progressRef.current.style.backgroundColor = 'red';
            })
    }
}

export const closeUploadModal = () => {
    uploadModalRef.current.style.display = 'none';
}
