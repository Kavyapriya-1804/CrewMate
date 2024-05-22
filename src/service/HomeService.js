import { apiEndPoints } from "../constants/apiEndpointsConstants";
import ApiClientHelper from "../helpers/apiHelpers";

//async function to fetch all crew data
export const getCrews = async () => {
  const res = await ApiClientHelper.get(
    `${apiEndPoints.CREW}`
  );
  console.log(res.data);
  return res;
};
