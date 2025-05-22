"use client";

import FormFields from "@/components/FormFields";
import FileInput from "@/components/FileInput";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";

const Upload = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });
  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!video.file || !thumbnail.file) {
        setError("Please select a video and thumbnail file.");
        return;
      }
      if (!formData.title || !formData.description) {
        setError("Please fill in all fields.");
        return;
      }
      //upload video to bunny
      //upload thumbnail to DB
      //attach thumbnail t
      //create a new entry in the DB for video details
    } catch (error) {
      console.log("ERRor", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="wrapper-md  upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        onSubmit={handleSubmit}
      >
        <FormFields
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video"
        />
        <FormFields
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          as="textarea"
          placeholder="Enter a clear and concise video description"
        />
        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />
        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />
        <FormFields
          id="visibility"
          label="Visibility"
          value={formData.description}
          onChange={handleInputChange}
          as="select"
          options={[
            {
              value: "public",
              label: "Public",
            },
            {
              value: "private",
              label: "Private",
            },
          ]}
        />
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default Upload;
