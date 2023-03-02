import request from "@/utils/request";

export function getQuestList(params?: any) {
  return request({
    url: "/question",
    method: "get",
    params
  });
}
