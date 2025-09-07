import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import '../css/HoverCard.module.css';

const HoverCardDemo = ({contentComponent, text}) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      {contentComponent}
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {text}
        </div>
        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
