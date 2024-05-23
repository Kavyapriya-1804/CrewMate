import { apiEndPoints } from "../constants/apiEndpointsConstants";
import ApiClientHelper from "../helpers/apiHelpers";

//async function to fetch all crew data
export const submitCrew = async (crewData) => {
  const res = await ApiClientHelper.post(`${apiEndPoints.CREW}`, crewData);
  return res.data;
};
