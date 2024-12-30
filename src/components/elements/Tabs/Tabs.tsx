import type { FC, ReactNode, KeyboardEvent } from 'react';
import React, { useState } from 'react';

import clsx from 'clsx';

import { Button } from '../Button';

import styles from './tabs.module.css';

type TabProps = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabProps[];
  className?: string;
};

export const Tabs: FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    switch (event.key) {
      case 'ArrowRight': {
        const nextIndex = (index + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
        break;
      }
      case 'ArrowLeft': {
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex].id);
        break;
      }
      case 'Home': {
        setActiveTab(tabs[0].id);
        break;
      }
      case 'End': {
        setActiveTab(tabs[tabs.length - 1].id);
        break;
      }
      case 'Enter': {
        setActiveTab(tabs[index].id);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className={clsx(className)}>
      <div aria-label="Tabs" className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <Button
            aria-controls={`tabpanel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            className={styles.tabButton}
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            valiant={activeTab === tab.id ? 'primary' : 'ghost'}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          aria-labelledby={`tab-${tab.id}`}
          className={styles.tabPanel}
          hidden={activeTab !== tab.id}
          id={`tabpanel-${tab.id}`}
          key={tab.id}
          role="tabpanel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
