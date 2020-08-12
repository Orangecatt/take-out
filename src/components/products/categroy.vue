<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item) in classicList" :key="item.type">
                <m-select :name="item.title" :list="item.subList" />
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item) in areaList" :key="item.type">
                <m-select :name="item.title" :list="item.subList" />
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/api/index.js';
import MSelect from './select.vue'
export default {
    data() {
        return {
            classicList:[],
            areaList:[
                {
                    title:"推荐商圈",
                    subList:[
                        {
                            name:"望京",
                            id:120000
                        },
                        {
                            name:"昌平",
                            id:12222
                        }
                    ]
                }
            ]
        }
    },
    created(){
        api.classify().then(res => {
            // console.log(res)
            this.classicList = res.data.data
        }),
        api.areaList().then(res => {
            // console.log(res.data.map(item => item.data))
            // this.areaList = res.data.data.map(item => item.name)
        })
        
    },
    components:{
        MSelect
    
    }
    
}
</script>