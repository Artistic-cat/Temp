import React from 'react';
// import axios from "axios";
import {preventDefault,dragOver,dragEnter,dragLeave,fileDrop, 
    filesSelected, fileInputClicked, handleFiles,validateFile,fileSize,
    fileType,removeFile,closeModal,uploadFiles,closeUploadModal} from "../../../Constants/FileUpload/FileDropBox";
import './FileDropBox.css';

/**
 * @Author: Rifas
 *
 * File Drop Box/Upload Component
 * This component contains the implementation to drag drop and upload files
 * to the backend server via the POST /files API
 */
const FileDropBox = () => {
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
                        <div className="file-drop-upload-icon"/>
                        Drag & Drop files here or click to select file(s)
                        <br/>
                        <small>Valid file types are <code>csv</code> and <code>json</code></small>
                    </div>
                    <input
                        ref={fileInputRef}
                        className="file-drop-file-input"
                        type="file"
                        multiple
                        onChange={filesSelected}
                    />
                </div>

                {
                    validFiles.map((data, i) =>
                        <div className="file-drop-file-status-bar" key={i}>
                            <div onClick={!data.invalid ? null : () => removeFile(data.name)}>
                                <div className="file-drop-file-type-logo"/>
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
            <div className="file-drop-modal" ref={modalRef}>
                <div className="file-drop-overlay"/>
                <span className="file-drop-close" onClick={(() => closeModal())}>X</span>
                <div className="file-drop-modal-image" ref={modalImageRef}/>
            </div>

            <div className="file-drop-upload-modal" ref={uploadModalRef}>
                <div className="file-drop-overlay"/>
                <div className="file-drop-close" onClick={(() => closeUploadModal())}>X</div>
                <div className="file-drop-progress-container">
                    <span ref={uploadRef}/>
                    <div className="file-drop-progress">
                        <div className="file-drop-progress-bar" ref={progressRef}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileDropBox;