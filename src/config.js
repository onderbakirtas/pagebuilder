const pageConfig = {
	pages: [
		{
			title: 'Anasayfa',
			route: 'anasayfa',
			layout: {
				name: 'LayoutA',
				slots: [
					{
						name: 'slotA',
						components: [
							{
								name: 'component1',
								data: {}
							}
						]
					}
				]
			}
		},
		{
			title: 'Hakkimizda',
			route: 'hakkimizda',
			layout: {
				name: 'LayoutB',
				slots: [
					{
						name: 'slotX',
						components: [
							{
								name: 'carda',
								data: {}
							},
							{
								name: 'cardb',
								data: {}
							}
						]
					},
					{
						name: 'slotY',
						components: [
							{
								name: 'cardb',
								data: {}
							}
						]
					},
					{
						name: 'slotZ',
						components: [
							{
								name: 'cardb',
								data: {}
							}
						]
					},
					{
						name: 'slotT',
						components: [
							{
								name: 'carda',
								data: {}
							}
						]
					}
				]
			}
		},
		{
			title: 'Kurumsal',
			route: 'kurumsal',
			layout: {
				name: 'LayoutB',
				slots: [
					{
						name: 'slotB',
						components: [
							{
								name: 'component1',
								data: {}
							}
						]
					}
				]
			}
		},
		{
			title: 'Iletisim',
			route: 'iletisim',
			layout: {
				name: 'LayoutC',
				slots: [
					{
						name: 'slotC',
						components: [
							{
								name: 'component1',
								data: {}
							}
						]
					}
				]
			}
		}
	]
};

export { pageConfig };
