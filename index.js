const youtubedl = require("youtube-dl-exec");
const logger = require("progress-estimator")();

const download = (url) => {
  return youtubedl(url, {
    output: "/Users/menglingyu/Desktop/%(title)s.%(ext)s",
    noWarnings: true,
    noCallHome: true,
    // 解释参数
    // output: 下载的视频的保存路径和文件名，可以使用通配符
    // noWarnings: 是否显示警告信息
    // noCallHome: 是否允许向服务器发送数据
    format:
      "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]/best[height<=1080]",
  })
    .then((output) => console.log("Downloaded", output))
    .catch((error) => console.log(error));
};
const url = "https://www.bilibili.com/video/BV1Bs4y1H7uc";
const init = async () => {
  const result = await logger(download(url), `Obtaining ${url}`);
};
init();
