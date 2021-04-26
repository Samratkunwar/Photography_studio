// functions to handel file to base64 conversion
function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
};

export async function tobase64Handler(files, callback) {
    const filePathsPromises = [];
    files.forEach(file => {
        filePathsPromises.push(toBase64(file));
    });
    const filePaths = await Promise.all(filePathsPromises);
    const mappedFiles = filePaths.map((base64File) => ({ b64String: base64File }));
    return [mappedFiles, callback];
}