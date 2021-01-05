import { Observable } from "rxjs";
import { InventoryItem } from "../model/inventory-item.model";

export abstract class InventoryService {

    public abstract findAllInventoryItems(): Observable<InventoryItem[]>;

}