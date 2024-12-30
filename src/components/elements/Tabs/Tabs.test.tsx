import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs } from './Tabs';

describe('Tabs コンポーネント', () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>Content 3</div> },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('正しいラベルのタブが表示される', () => {
    render(<Tabs tabs={tabs} />);
    const tabList = screen.getByRole('tablist');
    const tabButtons = screen.getAllByRole('tab');
    expect(tabList).toBeInTheDocument();
    expect(tabButtons).toHaveLength(tabs.length);
    tabs.forEach((tab, index) => {
      expect(tabButtons[index]).toHaveTextContent(tab.label);
    });
  });

  it('デフォルトで最初のタブのコンテンツが表示される', () => {
    render(<Tabs tabs={tabs} />);
    const panels = screen.getAllByRole('tabpanel', { hidden: true });
    expect(panels[0]).toBeVisible();
    // 最初のタブ以外のコンテンツは非表示
    panels.slice(1).forEach((panel) => {
      expect(panel).not.toBeVisible();
    });
  });

  it('タブをクリックするとコンテンツが切り替わる', async () => {
    render(<Tabs tabs={tabs} />);
    const allTabs = screen.getAllByRole('tab');
    const allPanels = screen.getAllByRole('tabpanel', { hidden: true });
    // 2 番目のタブをクリック
    await userEvent.click(allTabs[1]);
    expect(allPanels[1]).toBeVisible();
    // 他のタブのパネルが非表示であることを確認
    allPanels
      .filter((panel) => panel.id !== allPanels[1].id)
      .forEach((panel) => {
        expect(panel).not.toBeVisible();
      });
  });

  it('キーボード操作でコンテンツが切り替わる', async () => {
    render(<Tabs tabs={tabs} />);
    const tabButtons = screen.getAllByRole('tab');

    // 右矢印で Tab 2 に移動
    tabButtons[0].focus();
    await userEvent.keyboard('{ArrowRight}');
    const secondPanel = screen.getByRole('tabpanel', { name: tabs[1].label });
    expect(secondPanel).toBeVisible();

    // 右矢印で Tab 3 に移動
    tabButtons[1].focus();
    await userEvent.keyboard('{ArrowRight}');
    const thirdPanel = screen.getByRole('tabpanel', { name: tabs[2].label });
    expect(thirdPanel).toBeVisible();

    // 右矢印で Tab 1 に戻る（ループ）
    tabButtons[2].focus();
    await userEvent.keyboard('{ArrowRight}');
    const firstPanel = screen.getByRole('tabpanel', { name: tabs[0].label });
    expect(firstPanel).toBeVisible();

    // 左矢印で Tab 3 に移動（ループ）
    tabButtons[0].focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(thirdPanel).toBeVisible();

    // Home キーで最初のタブに移動
    await userEvent.keyboard('{Home}');
    expect(firstPanel).toBeVisible();

    // End キーで最後のタブに移動
    await userEvent.keyboard('{End}');
    expect(thirdPanel).toBeVisible();

    // 指定していないキーは無視される
    await userEvent.keyboard('A');
    expect(thirdPanel).toBeVisible();
  });

  it('Enterキーを押すとコンテンツが切り替わる', async () => {
    render(<Tabs tabs={tabs} />);
    const secondTab = screen.getByRole('tab', { name: tabs[1].label });
    secondTab.focus();
    await userEvent.keyboard('{Enter}');
    const secondPanel = screen.getByRole('tabpanel', { name: tabs[1].label });
    expect(secondPanel).toBeVisible();
  });
});
