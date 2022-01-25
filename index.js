import Sortable from 'sortablejs';

export function dragdrop() {
  const ts = this;
  if (ts.settings.mode !== 'multi') return;
  let sorter;

  ts.hook('before', 'lock', () => sorter && sorter.option("disabled", true));
  ts.hook('before', 'unlock', () => sorter && sorter.option("disabled", false));

  ts.on('initialize', () => {
    const {control, isLocked} = ts;
    control.addEventListener('mousedown', (e) => {
      const {target} = e;
      const item = target.closest('.item');

      // To prevent Tom Select stopping the drag event
      if (item && control.contains(item)) e.stopPropagation();
    })
    sorter = new Sortable(control, {
      draggable: '[data-ts-item]',
      dataIdAttr: 'data-value',
      direction: 'horizontal',
      disabled: !! isLocked,
      onUpdate() {
        ts.setValue(sorter.toArray().filter(a => a));
      }
    });
  });
}

export default dragdrop;
