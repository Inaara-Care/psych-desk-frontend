// src/pages/DemoDropdownPage.tsx
import React, { useState } from 'react';
import {
  InputDropdownBase,
  InputDropdownMenu,
  InputDropdownMenuItem,
} from '../components/dropdown';
import { DropdownType, DropdownState } from '../components/dropdown/types';

// Sample icons
const SearchIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35m0 0A7.35 7.35 0 1011.3 4.3a7.35 7.35 0 105.35 12.35z"
    />
  </svg>
);
const UserIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 10a4 4 0 110-8 4 4 0 010 8zm-8 7a8 8 0 1116 0H2z" />
  </svg>
);

const DemoDropdownPage = () => {
  // For demonstration
  const [openBasic, setOpenBasic] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  // Helper arrays to demonstrate states and types
  const states: DropdownState[] = [
    'placeholder',
    'default',
    'open',
    'disabled',
    'filled',
    'hover',
    'focused',
  ];
  const types: DropdownType[] = [
    'default',
    'icon-leading',
    'avatar-leading',
    'search',
    'destructive',
  ];

  // For a quick avatar
  const Avatar = (
    <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
      <UserIcon />
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-8">Dropdown Components Demo</h1>

      {/* ===========================
          1) Basic "Toggle" Example
          =========================== */}
      <div className="relative">
        <InputDropdownBase
          label="Standard Dropdown"
          state={openBasic ? 'open' : 'default'}
          onClick={() => setOpenBasic(!openBasic)}
          placeholder="Click to toggle"
        />
        {openBasic && (
          <InputDropdownMenu>
            <InputDropdownMenuItem label="Option 1" />
            <InputDropdownMenuItem label="Option 2" />
            <InputDropdownMenuItem label="Disabled Option" state="disabled" />
          </InputDropdownMenu>
        )}
      </div>

      {/* ===========================
          2) Searchable Dropdown
          =========================== */}
      <div className="relative">
        <InputDropdownBase
          type="search"
          label="Search Dropdown"
          leadingIcon={<SearchIcon />}
          placeholder="Type to filter..."
          state={openSearch ? 'open' : 'default'}
          onClick={() => setOpenSearch(true)}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setOpenSearch(true);
          }}
          value={searchValue}
        />
        {openSearch && (
          <InputDropdownMenu scrollable>
            {[...Array(15)].map((_, i) => {
              const text = `Search Result ${i + 1}`;
              // Simple filter logic
              if (
                !searchValue ||
                text.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return (
                  <InputDropdownMenuItem
                    key={i}
                    label={text}
                    check={selectedItem === text}
                    onClick={() => {
                      setSelectedItem(text);
                      setSearchValue(text);
                      setOpenSearch(false);
                    }}
                  />
                );
              }
              return null;
            })}
          </InputDropdownMenu>
        )}
      </div>

      {/* ===========================
          3) Avatar Leading Example
          =========================== */}
      <div className="relative">
        <InputDropdownBase
          type="avatar-leading"
          avatarLeading={Avatar}
          label="Profile Settings"
          supportingText="Avatar leading"
          placeholder="Click me (no menu here by default)"
        />
        {/* 
          You can add a menu here if desired:
          <InputDropdownMenu>
            <InputDropdownMenuItem label="Profile" />
            <InputDropdownMenuItem label="Logout" destructive />
          </InputDropdownMenu>
        */}
      </div>

      {/* ===========================
          4) Destructive Menu Example
          =========================== */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Destructive Menu Items
        </label>
        <InputDropdownMenu>
          <InputDropdownMenuItem label="Normal Item" />
          <InputDropdownMenuItem
            label="Destructive Action"
            destructive
            state="hover"
          />
        </InputDropdownMenu>
      </div>

      {/* ===========================
          5) Half Size Example
          =========================== */}
      <div className="relative">
        <InputDropdownBase
          size="half"
          label="Half Width Dropdown"
          supportingText="Try resizing the screen"
          placeholder="I'm half width"
        />
      </div>

      {/* ===========================
          6) All States & Types Grid
          (for visual testing)
          =========================== */}
      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">
          Visual Testing: All States & Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {types.map((t) => (
            <div key={t} className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">{`Type: ${t}`}</h3>
              {states.map((s) => (
                <InputDropdownBase
                  key={`${t}-${s}`}
                  type={t}
                  state={s}
                  label={`State: ${s}`}
                  placeholder={`${t} - ${s}`}
                  className="mb-4"
                  leadingIcon={t === 'icon-leading' ? <SearchIcon /> : undefined}
                  avatarLeading={t === 'avatar-leading' ? Avatar : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoDropdownPage;
