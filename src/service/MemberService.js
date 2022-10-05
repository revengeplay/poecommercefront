import axios from "axios";

const ECOMMERCE_API_BASE_URL = "http://localhost:8080/api/users";

class MemberService {
  saveMember(member) {
    return axios.post(ECOMMERCE_API_BASE_URL, member);
  }
}

export default new MemberService();
