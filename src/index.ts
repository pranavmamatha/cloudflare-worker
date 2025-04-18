export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response("Hey Internet!, I'm Pranav");
	},
} satisfies ExportedHandler<Env>;
