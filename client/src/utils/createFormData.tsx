interface JsonObject {
    [key: string]: string | undefined;
  }
  
  const createFormData = (object: JsonObject): string => {
    return JSON.stringify(object);
  };
  
  export default createFormData;
  