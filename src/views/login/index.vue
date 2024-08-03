<template>
	<div class="login-box" >
		<el-form :model="form" :rules="rules" ref="form" label-width="70px" class="login-form">
			<h2 class="login-title">vue+Echarts后台管理系统</h2>
			<el-form-item label="用户名" prop="username">
				<el-input placeholder="请输入用户名" v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmitLogin">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import { loginApi } from '../../api/loginApi.js'
	export default {
		data() {
			return {
				form: {
					username: "admin",
					password: '123456',
				},
				rules: {
					username: [{
						required: true,
						message: "请输入用户名",
						trigger: "blur"
					}, ],
					password: [{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							max: 32,
							message: "密码长度在6到32位字符",
							trigger: ["blur", "change"],
						}
					]
				}
			}
		},
		methods: {
			onSubmitLogin() {
				this.$refs.form.validate(valid => {
					if (valid) {
						let params = {
							...this.form
						}
						loginApi(params).then((res)=>{
						console.log("res");
						})
					}
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.login-form {
		width: 350px;
		background-color: #fff;
		padding: 15px;
		height: 250px;
		border-radius: 20px;
		position: absolute;
		margin-top: -125px;
		margin-left: -175px;
		top: 50%;
		left: 50%;
	}

	.login-box {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #ccc;
	}

	.login-title {
		color: #333;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 30px;
	}
</style>