<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text
				class="title"
				v-clipboard:copy="title"
				v-clipboard:success="onCopy"
				v-clipboard:error="onError"
			>
				{{title}}
			</text>
			<uni-icon type="contact" size="30"></uni-icon>
			<uni-card
				:is-full="true"
				title="DCloud"
				thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
				extra="2018.12.12"
				note="Tips"
			>
				内容主体，可自定义内容及样式，内容主体，可自定义内容及样式，内容主体，可自定义内容及样式
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			onCopy: function (e) {
				uni.showModal({
					content: 'You just copied: ' + e.text
				})
			},
			onError: function (e) {
				uni.showModal({
					content: 'Failed to copy texts'
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
