require("dotenv").config();
import "./db";
import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import postingRouter from "./routers/posting.router";
import commentRouter from "./routers/comment.router";
import replyCommentRouter from "./routers/replyComment.router";
import likeRouter from "./routers/like.router";
import userRouter from "./routers/user.router";
import myPageRouter from "./routers/myPage.router";

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/posting", postingRouter);
app.use("/comment", commentRouter);
app.use("/reply-comment", replyCommentRouter);
app.use("/like", likeRouter);
app.use("/user", userRouter);
app.use("/my-page", myPageRouter);

if (process.env.NODE_ENV == "production") {
  const options = {
    ca: fs.readFileSync(
      `/etc/letsencrypt/live/${process.env.DOMAIN as string}/fullchain.pem`
    ),
    key: fs.readFileSync(
      `/etc/letsencrypt/live/${process.env.DOMAIN as string}/privkey.pem`
    ),
    cert: fs.readFileSync(
      `/etc/letsencrypt/live/${process.env.DOMAIN as string}/cert.pem`
    ),
  };

  https.createServer(options, app).listen(process.env.PORT || 443, () => {
    console.log(`${process.env.PORT || 443}PORT 실행중..`);
  });
} else {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`${process.env.PORT || 8000}PORT 실행중..`);
  });
}
