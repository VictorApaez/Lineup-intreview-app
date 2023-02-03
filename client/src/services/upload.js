import React, { useState } from "react";

const [fileUrl, setFileUrl] = useState(null);

const handleFileRetrieval = async (id) => {
  const { data } = await axios.get(`/api/files/${id}`);
  setFileUrl(data.url);
};

return (
  <div>
    <button onClick={() => handleFileRetrieval(fileId)}>Retrieve</button>
    {fileUrl && <img src={fileUrl} />}
  </div>
);
