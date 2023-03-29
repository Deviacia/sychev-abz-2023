import React, {useState, useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Portal';
import styles from './Tooltip.module.scss';

const Tooltip = ({children, position, text}) => {
  const [tooltipPosition, setTooltipPosition] = useState({top: 0, left: 0});
  const [anchorEl, setAnchorEl] = useState(null);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const tooltipEl = tooltipRef.current;

    if (!anchorEl || !tooltipEl) return;

    const scrollY = window.scrollY;

    const anchorRect = anchorEl.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    const SPACE = 20;

    if (position === 'top') {
      setTooltipPosition({
        top: anchorRect.top - tooltipRect.height - SPACE + scrollY,
        left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
      });
    } else if (position === 'left') {
      setTooltipPosition({
        top: anchorRect.top - tooltipRect.height / 2 +
          anchorRect.height / 2 + scrollY,
        left: anchorRect.left - tooltipRect.width - SPACE,
      });
    } else if (position === 'right') {
      setTooltipPosition({
        top: anchorRect.top - tooltipRect.height / 2 +
          anchorRect.height / 2 + scrollY,
        left: anchorRect.right + SPACE,
      });
    } else {
      setTooltipPosition({
        top: anchorRect.bottom + tooltipRect.height - SPACE + scrollY,
        left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
      });
    }
  }, [anchorEl]);

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            ref={tooltipRef}
            className={styles.tooltip}
            style={{
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}
          >
            {text}
          </div>
        </Portal>
      )}
      {React.cloneElement(children, {
        onMouseLeave: () => setAnchorEl(null),
        onMouseEnter: (event) => {
          setAnchorEl(event.currentTarget);
        },
      })}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  text: PropTypes.string,
};

export default Tooltip;
