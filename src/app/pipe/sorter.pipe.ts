import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {
  /**
   * A kapott tömb rendezése a szűrőkifejezés alapján.
   * @param value {any[]} - a tömb
   * @param key {string} - az objektumkulcs, amely alapján rendez
   * @returns {any[]} - a kulcs alapján rendezett tömb
   */
  transform(value: any[], key: string): any {
    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb vagy nincs megadva a key,
     * térj vissza a value változóval.
     */

    /**
     * FELADAT!
     * Térj vissza a value.sort metódus eredményével!
     * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
     * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusúra,
     *  azután alakítsd őket kisbetűssé.
     * 3. Térj vissza a két string localeCompare metódus által visszaadott
     *  összehasonlításának az eredményével.
     */
    if (!(value instanceof Array) || key === null) {
      return value;
    } else {
      return value.sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key];
        } else {
          const strA = String(a[key]).toLocaleLowerCase();
          const strB = String(b[key]).toLocaleLowerCase();
          return strA.localeCompare(strB);
        }
      });
    }
  }
}
