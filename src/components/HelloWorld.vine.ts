import { ref } from 'vue';
function HelloWorld(props:{
    count:number
}){
    vineStyle.scoped(css`
        .test{
            color: #ff942f;
        }
    `)

    const {count=0} = props;
    const countRef = ref(count);
    const addhandler = ()=>{
        countRef.value++;
    }
    const subhandler = ()=>{
        countRef.value--;
    }

    return vine`<div>
        <div class="test">hello world!!!</div>
        <div>count is: {{ countRef }}</div>
        <button @click="addhandler">+++</button>
        <button @click="subhandler">---</button>
    </div>
    `
}
export default  HelloWorld;