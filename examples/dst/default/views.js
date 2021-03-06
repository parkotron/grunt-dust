define(['dust-runtime'], function () {
	// friends.dust
	(function(){dust.register("friends",body_0);function body_0(chk,ctx){return chk.section(ctx.get("friends"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.reference(ctx.get("name"),ctx,"h").write(", ").reference(ctx.get("age"),ctx,"h").write("\n");}return body_0;})();
	// nested/inline-params.dust
	(function(){dust.register("nested/inline-params",body_0);function body_0(chk,ctx){return chk.section(ctx.get("profile"),ctx,{"block":body_1},{"bar":"baz","bing":"bong"});}function body_1(chk,ctx){return chk.reference(ctx.get("name"),ctx,"h").write(", ").reference(ctx.get("bar"),ctx,"h").write(", ").reference(ctx.get("bing"),ctx,"h");}return body_0;})();
	// tags.dust
	(function(){dust.register("tags",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("tags"),ctx,{"else":body_1,"block":body_2},null);}function body_1(chk,ctx){return chk.write("No Tags!");}function body_2(chk,ctx){return chk.write("<ul>").section(ctx.get("tags"),ctx,{"block":body_3},null).write("</ul>");}function body_3(chk,ctx){return chk.write("<li>").reference(ctx.getPath(true,[]),ctx,"h").write("</li>");}return body_0;})();
});