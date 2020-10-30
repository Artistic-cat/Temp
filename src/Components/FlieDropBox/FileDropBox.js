import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

import './FileDropBox.css';

const FileDropBox = () => {
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

    const preventDefault = (e) => {
        e.preventDefault();
        // e.stopPropagation();
    }

    const dragOver = (e) => {
        preventDefault(e);
    }

    const dragEnter = (e) => {
        preventDefault(e);
    }

    const dragLeave = (e) => {
        preventDefault(e);
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const handleFiles = (files) => {
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

    const validateFile = (file) => {
        const validTypes = ["text/csv", "image/jpeg"];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }

        return true;
    }

    const fileSize = (size) => {
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
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

    const openImageModal = (file) => {
        const reader = new FileReader();
        modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    const closeModal = () => {
        modalRef.current.style.display = "none";
        modalImageRef.current.style.backgroundImage = 'none';
    }

    const uploadFiles = async () => {
        uploadModalRef.current.style.display = 'block';
        uploadRef.current.innerHTML = 'File(s) Uploading...';
        for (let i = 0; i < validFiles.length; i++) {
            const formData = new FormData();
            formData.append('image', validFiles[i]);
            formData.append('key', '');

            axios.post('https://api.imgbb.com/1/upload', formData, {
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

    const closeUploadModal = () => {
        uploadModalRef.current.style.display = 'none';
    }

    return (
        <div>
            <div className="file-drop-container">
                {unsupportedFiles.length === 0 && validFiles.length ?
                    <button className="file-drop-file-upload-btn" onClick={() => uploadFiles()}>Upload
                        Files</button> : ''}
                {unsupportedFiles.length ? <p>Please remove all unsupported files.</p> : ''}
                <div className="file-drop-drop-container"
                     onDragOver={dragOver}
                     onDragEnter={dragEnter}
                     onDragLeave={dragLeave}
                     onDrop={fileDrop}
                     onClick={fileInputClicked}
                >
                    <div className="file-drop-drop-message">
                        <div className="file-drop-upload-icon"></div>
                        Drag & Drop files here or click to select file(s)
                    </div>
                    <input
                        ref={fileInputRef}
                        className="file-drop-file-input"
                        type="file"
                        multiple
                        onChange={filesSelected}
                    />
                </div>
                <div className="file-drop-file-display-container">
                    {
                        validFiles.map((data, i) =>
                            <div className="file-drop-file-status-bar" key={i}>
                                <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                                    <div className="file-drop-file-type-logo"></div>
                                    <div className="file-drop-file-type">{fileType(data.name)}</div>
                                    <span
                                        className={`file-drop-file-name ${data.invalid ? 'file-drop-file-error' : ''}`}>{data.name}</span>
                                    <span
                                        className="file-drop-file-size">({fileSize(data.size)})</span> {data.invalid &&
                                <span className='file-drop-file-error-message'>({errorMessage})</span>}
                                </div>
                                <div className="file-drop-file-remove" onClick={() => removeFile(data.name)}>X</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="file-drop-modal" ref={modalRef}>
                <div className="file-drop-overlay"></div>
                <span className="file-drop-close" onClick={(() => closeModal())}>X</span>
                <div className="file-drop-modal-image" ref={modalImageRef}></div>
            </div>

            <div className="file-drop-upload-modal" ref={uploadModalRef}>
                <div className="file-drop-overlay"></div>
                <div className="file-drop-close" onClick={(() => closeUploadModal())}>X</div>
                <div className="file-drop-progress-container">
                    <span ref={uploadRef}></span>
                    <div className="file-drop-progress">
                        <div className="file-drop-progress-bar" ref={progressRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileDropBox;