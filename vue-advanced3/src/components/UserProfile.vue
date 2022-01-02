<template>
   <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <slot name = "username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                    <slot name="time">
                        <!-- 상위 컴포넌트에서의 정의할 영역 -->
                    </slot>
                </div>
            </div>
            <slot name="karma">
            </slot>
            <slot name="test">
            </slot>
          </div>
</template>

<script>
export default {
    props:{
        info: Object
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}
.fa-user{
    font-size: 2.5rem;
}
</style>