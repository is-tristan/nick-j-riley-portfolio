"use client";

// React
import { useEffect, useState } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Styles
import styles from "@/styles/components/layouts/header/header-menu.module.scss";

// Data
import { menuItemsData as data } from "@/components/layouts/header/items/menu-items-data";

// Icons
import { logo, closeIcon, chevronDown } from "@/utils/icons";

export default function HeaderMenu({ isOpen = false, onClose }) {

    const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);

    const isActive = (href) => {
        return pathname === href;
    };

    const isSubmenuOpen = (label) => {
        return openSubmenu === label;
    };

    const isNestedSubmenuOpen = (submenuItem) => {
        return openNestedSubmenu === submenuItem.label;
    };

    const handleSubmenuToggle = (label) => {
        setOpenSubmenu((current) => (current === label ? null : label));
        setOpenNestedSubmenu(null);
    };

    const handleNestedSubmenuToggle = (submenuItem) => {
        setOpenNestedSubmenu((current) => (current === submenuItem.label ? null : submenuItem.label));
    };

    const handleLinkClick = () => {
        onClose();
        setOpenSubmenu(null);
        setOpenNestedSubmenu(null);
    };

    useEffect(() => {
        if (!isOpen) {
            setOpenSubmenu(null);
            setOpenNestedSubmenu(null);
        }
    }, [isOpen]);

    return (

        <>

            <div className={`${styles.menu}`} data-toggled={isOpen} role="navigation" data-name="menu">

                <div className={styles.menuHeader}>

                    <Link href="/" className={styles.menuLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logo }} />

                    <span className={`${styles.menuToggle} ${styles.menuClose}`} onClick={onClose} dangerouslySetInnerHTML={{ __html: closeIcon }} />

                </div>

                <div className={styles.menuItems}>

                    {data.map((item) => (

                        <div key={item.label} className={styles.menuItem} data-active={isActive(item.href)}>

                            {item.submenu ? (

                                <>

                                    <button
                                        type="button"
                                        className={styles.menuItemToggle}
                                        data-submenu-open={isSubmenuOpen(item.label)}
                                        onClick={() => handleSubmenuToggle(item.label)}
                                    >

                                        <span>{item.label}</span>

                                        <span className={styles.menuItemIcon} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                    </button>

                                    <div className={styles.submenu} data-submenu-open={isSubmenuOpen(item.label)}>

                                        {item.submenu.map((submenuItem) => (

                                            <div key={submenuItem.label} className={styles.submenuItem}>

                                                {submenuItem.submenu ? (

                                                    <>

                                                        <button
                                                            type="button"
                                                            className={styles.submenuItemToggle}
                                                            data-submenu-open={isNestedSubmenuOpen(submenuItem)}
                                                            onClick={() => handleNestedSubmenuToggle(submenuItem)}
                                                        >

                                                            {submenuItem.icon && (<div className={styles.submenuItemIcon} dangerouslySetInnerHTML={{ __html: submenuItem.icon }} />)}

                                                            <span>{submenuItem.label}</span>

                                                            <span className={styles.submenuItemChevron} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                                        </button>

                                                        <div className={styles.nestedSubmenu} data-submenu-open={isNestedSubmenuOpen(submenuItem)}>

                                                            <div className={styles.nestedSubmenuItems}>

                                                                {submenuItem.submenu.map((nestedSubmenuItem) => (

                                                                    <Link
                                                                        key={nestedSubmenuItem.label}
                                                                        href={nestedSubmenuItem.href}
                                                                        className={styles.nestedSubmenuItemLink}
                                                                        onClick={handleLinkClick}
                                                                    >

                                                                        <span>{nestedSubmenuItem.label}</span>

                                                                    </Link>

                                                                ))}

                                                            </div>

                                                        </div>

                                                    </>

                                                ) : (

                                                    <Link href={submenuItem.href} className={styles.submenuItemLink} onClick={handleLinkClick}>

                                                        {submenuItem.icon && (<div className={styles.submenuItemIcon} dangerouslySetInnerHTML={{ __html: submenuItem.icon }} />)}

                                                        <span>{submenuItem.label}</span>

                                                    </Link>

                                                )}

                                            </div>

                                        ))}

                                    </div>

                                </>

                            ) : (

                                <Link href={item.href} className={styles.menuItemLink} onClick={handleLinkClick}>

                                    {item.label}

                                    {item.icon && (<div className={styles.menuItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />)}

                                </Link>

                            )}

                        </div>

                    ))}

                </div>

            </div>

            <div className={`hidden-xxl ${styles.menuBackdrop}`} onClick={onClose} data-toggled={isOpen} />

        </>

    )

}
