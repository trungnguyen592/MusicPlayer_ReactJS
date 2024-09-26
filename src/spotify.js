import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "d77a6cd0bd734f10b73c167a1a38f618";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

// URL đăng nhập Spotify
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// Tạo axios client
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

// Hàm set token cho các yêu cầu API
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });

  // Xử lý lỗi và chuyển hướng về trang đăng nhập khi gặp lỗi 403
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 403) {
        console.error(
          "Lỗi 403: Quyền truy cập bị từ chối",
          error.response.data
        );
        if (
          window.confirm(
            "Token không hợp lệ hoặc hết hạn. Vui lòng đăng nhập lại."
          )
        ) {
          window.location.href = "/login"; // Chuyển hướng về trang login
        }
      }
      return Promise.reject(error);
    }
  );
};

export default apiClient;
