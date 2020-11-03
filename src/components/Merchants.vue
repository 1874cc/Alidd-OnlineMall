<template>
	<div class="talk_con">
		<span>阿里多多客服</span>
		<div class="talk_show" id="words">
			<div :class="[(i.person=='A')?'atalk':'btalk']" v-for="i in list1" :key='i'><span>{{i.person}}：{{i.say}}</span></div>
		</div>
		<div class="talk_input">
			<select class="whotalk" id="who" v-model="sel1">
				<option value="0">A说：</option>
				<option value="1">B说：</option>
			</select>
			<input type="text" class="talk_word" id="talkwords" v-model="text1">
			<!-- 绑定单击监听,把value传到vue的list1中 -->
			<input type="button" value="发送" class="talk_sub" id="talksub" @click="fnAdd">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'talk_con',
		data(){
			return{
				list1: [{
						person: 'A',
						say: '包邮吗？'
					},
					{
						person: 'B',
						say: '亲，全国包邮哦！'
					},
				],
				sel1: 0,
				text1: ''
			}
		},
		methods: {
			fnAdd() {
				if (this.text1 == '') {
					alert("请输入内容!");
					return;
				}
				// 列表追加数据push()
				this.list1.push({
					person: (this.sel1 == 0) ? 'A' : 'B',
					say: this.text1
				});
				// 每次输入内容后,清空输入栏数据
				this.text1 = '';
			}
		}
	}
</script>

<style scoped>
	.talk_con {
		width: 600px;
		height: 500px;
		border: 1px solid #666;
		margin: 50px auto 0;
		background: #f9f9f9;
	}

	.talk_show {
		width: 580px;
		height: 420px;
		border: 1px solid #666;
		background: #fff;
		margin: 10px auto 0;
		overflow: auto;
	}

	.talk_input {
		width: 580px;
		margin: 10px auto 0;
	}

	.whotalk {
		width: 80px;
		height: 30px;
		float: left;
		outline: none;
	}

	.talk_word {
		width: 420px;
		height: 26px;
		padding: 0px;
		float: left;
		margin-left: 10px;
		outline: none;
		text-indent: 10px;
	}

	.talk_sub {
		width: 56px;
		height: 30px;
		float: left;
		margin-left: 10px;
	}

	.atalk {
		margin: 10px;
	}

	.atalk span {
		display: inline-block;
		background: #0181cc;
		border-radius: 10px;
		color: #fff;
		padding: 5px 10px;
	}

	.btalk {
		margin: 10px;
		text-align: right;
	}

	.btalk span {
		display: inline-block;
		background: #ef8201;
		border-radius: 10px;
		color: #fff;
		padding: 5px 10px;
	}
</style>
