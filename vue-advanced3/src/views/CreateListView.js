
import ListView from './ListView.js';
export default function createListView(name){
    return {
        // 재사용할 인스턴스(캄포넌트) 옵션들이 들어갈 자리
        name : name,
        render(createElement){
            return createElement(ListView);
        }
    }
}