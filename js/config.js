// Configuration file for CodeMirror v1.0

webix.ui({
	type: "space", rows: [
		{ id: 'editor', view: "nic-editor" },
		{ template: "NIC Editor", type: "header" },
		{
			id: 'editor2',
			config: { fullPanel: true },
			view: "nic-editor"
		}
	]
});

$$("editor").setValue("NicEdit is a WYSIWYG editor for websites. Its goal is to be as simple and fast as possible for users of your application. NicEdit is extremely lightweight and can be easily integrated in any site with minimal impact while providing visitors an effective means to express themselves in rich text. \n \n Don't overwhelm your users with \"everything and the kitchen sink\" editors that confuse and frustrate your visitors and take forever to load. Good things really can be free. Customize your copy of NicEdit and get started editing anywhere today!");
$$("editor").focus();

$$("editor2").setValue("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 	quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 	proident, sunt in culpa  qui officia deserunt mollit anim id est laborum.");
