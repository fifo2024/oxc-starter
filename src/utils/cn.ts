/**
 * 简单的 className 合并工具，可根据需要替换为 clsx / tailwind-merge
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
