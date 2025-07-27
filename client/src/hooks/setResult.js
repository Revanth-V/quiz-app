import { postServerData } from "../helper/helper.js";
import * as Action from "../redux/result_reducer.js";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

/** insert user data */
export const publishResult = async (resultData) => {
  const { result, username } = resultData;
  try {
    console.log("publishResult: Attempting to save result data:", resultData);
    if (Array.isArray(result) && result.length > 0 && !username)
      throw new Error("Couldn't get Result");

    const response = await postServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      resultData,
      (data) => data
    );
    console.log("publishResult: Successfully saved result:", response);
    return response;
  } catch (error) {
    console.log("publishResult: Error saving result:", error);
    throw error;
  }
};
