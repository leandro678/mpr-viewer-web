type Props = {
  onFileLoaded: (content: string, fileName: string) => void;
};

function FileUploader({ onFileLoaded }: Props) {
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;

      onFileLoaded(content, file.name);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".mpr,.MPR"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUploader;