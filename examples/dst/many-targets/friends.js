define(['dust-runtime'], function () {
	(function(){dust.register("friends",body_0);function body_0(chk,ctx){return chk.section(ctx.get("friends"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.reference(ctx.get("name"),ctx,"h").write(", ").reference(ctx.get("age"),ctx,"h").write("\n");}return body_0;})();
});