import sortable from 'sortablejs';


export default function(select) {
	const {control, settings, lock: oldLock, unlock: oldUnlock} = select;
	if (settings.mode !== 'multi') return;

	select.hook('instead', 'lock', () => {
		let sortable = $(control).data('sortable');
		if (sortable) sortable.disable();
		return oldLock.call(self);
	});

	select.hook('instead', 'unlock', () => {
		let sortable = $(control).data('sortable');
		if (sortable) sortable.enable();
		return oldUnlock.call(self);
	});

	select.on('initialize', () => {
		let $control = $(control).sortable({
			items: '[data-value]',
			forcePlaceholderSize: true,
			disabled: select.isLocked,
			start: (e, ui) => {
				ui.placeholder.css('width', ui.helper.css('width'));
				$control.css({overflow: 'visible'});
			},
			stop: () => {
				$control.css({overflow: 'hidden'});

				let values = [];
				$control.children('[data-value]').each((el) => {
					if(el.dataset.value) values.push(el.dataset.value);
				});

				select.setValue(values);
			}
		});

	});

};
