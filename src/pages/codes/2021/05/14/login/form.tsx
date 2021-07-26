
export default function Form() {
	return <>
		<div className="cls001">
			<div className="cls002">
				<img src="/images/loginlogo.png" alt="logo" className="cls003" />
				<span className="title">管理运营平台</span>
			</div>
			<div className="cls004">
				<div className="cls005">
					<i className="cls006"></i>
					<input type="text" placeholder="用户名" className="cls007" />
				</div>
				<div className="cls005">
					<i className="cls006"></i>
					<input type="password" placeholder="密码" className="cls007" />
				</div>
				<input type="button" value="登录" className="cls008" />
			</div>
		</div>
		<style jsx>{`
.cls001 {
	border-style: none;
	border-width: 1px;
	border-radius: 4px;
	background:white;
	padding: 2rem;
}
.cls002 {
	color: #666;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 7rem;
}
.title{
	font-size: 1.5rem;
	vertical-align: middle;
}
.cls003 {
	vertical-align: middle;
	width:auto;
	height: 3.5rem;
	margin-right: 3rem;
}
.cls004 {
	padding:0 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.cls005 {
	width: 20rem;
	border-radius: 4px;
	border: 1px solid #ddd;
	display: flex;
	justify-content: center;
	line-height: 5rem;
	margin-bottom: 2rem;
}
.cls006 {
	color:#999;
	font-size: 22px;
	left: 15px
}
.cls007 {
	border-radius: 4px;
	border-style: none;
	width: 100%;
	height: 3rem;
	line-height: 3rem;
	color: #999999;
	padding-left: 3.8rem;
	font-size: 1rem;
	vertical-align: top;
}
.cls008 {
	border-radius: 4px;
	line-height: 3rem;
	border-style: none;
	text-align: center;
	cursor: pointer;
	font-size: 1rem;
	color:#fff;
	background-color: rebeccapurple;
	transition: all 600ms;
}
.cls008:hover{
	background-color: #663399a6;
}
`}</style>
	</>;
}
