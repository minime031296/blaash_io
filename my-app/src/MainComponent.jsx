import React, { useEffect, useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import './maincomponent.css';
import { database } from './firebase';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';

const initialComponents = [
  { id: "1", name: <PageOne /> },
  { id: "2", name: <PageTwo /> },
  { id: "3", name: "Component 3" }
];

const MainComponent = () => {
  const [components, setComponents] = useState(initialComponents);
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    loadLayout();
  }, []);

  const loadLayout = async () => {
    const layoutRef = ref(database, 'layouts/layout1');
    const snapshot = await get(layoutRef);
    if (snapshot.exists()) {
      setComponents(snapshot.val());
    }
  };

  const saveLayout = () => {
    set(ref(database, 'layouts/layout1'), components);
  };

  const publishLayout = () => {
    const currentComponent = components[currentIndex];
    console.log("Publishing component:", currentComponent);
    const layoutUrl = `/layout-preview?layout=${encodeURIComponent(JSON.stringify(currentComponent))}`;
    window.open(layoutUrl, '_blank');
  };

  const handleDragStart = (e) => {
    setActiveId(e.active.id);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setComponents((prev) => {
        const oldIndex = prev.findIndex((comp) => comp.id === active.id);
        const newIndex = prev.findIndex((comp) => comp.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % components.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + components.length) % components.length);
  };

  return (
    <div>
      <h1>Dynamic Page Layout</h1>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={components.map((c) => c.id)}>
          <div className="layout">
            <div className="draggable">
              {components[currentIndex].name}
            </div>
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? <div className="overlay">{components.find((c) => c.id === activeId)?.name}</div> : null}
        </DragOverlay>
      </DndContext>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={saveLayout}>Save Layout</button>
      <button onClick={loadLayout}>Load Layout</button>
      <button onClick={publishLayout}>Publish</button>
    </div>
  );
};

export default MainComponent;
