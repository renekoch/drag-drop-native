import Sortable from 'sortablejs';

export function dragdrop() {
  const ts = this;
  if (ts.settings.mode !== 'multi') return;
  let sorter;

  ts.hook('before', 'lock', () => sorter?.option("disabled", true));
  ts.hook('before', 'unlock', () => sorter?.option("disabled", false));

  ts.on('initialize', () => {
    const {control, isLocked} = ts;
    sorter = new Sortable(control, {
      draggable: '[data-value]',
      dataIdAttr: 'data-value',
      direction: 'horizontal',
      disabled: !! isLocked,
      ghostClass: "ts-element__ghost",
      onStart(e) {
        const {item, clone} = e;
        clone.style.width = getComputedStyle(item).width;
        control.style.overflow = 'visible';
      },
      onStop() {
        control.style.overflow = 'hidden';
        ts.setValue(sorter.toArray().filter(a => a));
      }
    });
  });
}

export default dragdrop;