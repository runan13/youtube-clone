import express from "express";
import routes from "../routes";
import {
  videoDetail,
  getEditVideo,
  deleteVideo,
  getUpload,
  postUpload,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(deleteVideo, deleteVideo);

export default videoRouter;
