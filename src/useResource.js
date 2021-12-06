import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get(resourceUrl);
      setResource(result);
    })();
  }, [resourceUrl]);

  return resource;
};
